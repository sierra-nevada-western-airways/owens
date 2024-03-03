import { useState, ValueDefaults } from "@/utilities";
import type { AxiosResponse } from "axios";
import { onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import {
  BadRequest,
  InternalServerError,
  NoContent,
  Success,
} from "./StatusCodes";
import type { NavigationResult } from "@/router/NavigationResult";
import { errorRoute } from "@/features/error/ErrorView.Routes";

export default function useDataFetch<T>(
  initialState: T,
  callback: () => Promise<AxiosResponse<T>>,
): [state: Ref<T>, isLoading: Ref<boolean>, error: Ref<string>] {
  const [isLoading, setIsLoading] = useState<boolean>(ValueDefaults.Boolean);
  const [error, setError] = useState<string>(ValueDefaults.String);
  const [state, updateState] = useState<T>(initialState);

  const router = useRouter();

  onMounted(() => {
    const getData = async (): Promise<NavigationResult> => {
      setIsLoading(true);

      return callback()
        .then((response: AxiosResponse<T>) => {
          switch (response.status) {
            case Success: {
              return updateState(response.data);
            }
            case NoContent: {
              return updateState(response.data);
            }
            case BadRequest: {
              return setError(response.statusText);
            }
            case InternalServerError: {
              return router.push(errorRoute);
            }
            default: {
              return router.push(errorRoute);
            }
          }
        })
        .catch(() => {
          return router.push(errorRoute);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    void getData();
  });

  return [state, isLoading, error];
}
