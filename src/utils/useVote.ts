import {
  MutationFunction,
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const useVote = (
  query: MutationFunction<unknown, void>
): {
  vote: UseMutateFunction<unknown, unknown, void, unknown>;
  isLoading: boolean;
  isSuccess: boolean;
} => {
  const queryClient = useQueryClient();
  const {
    mutate: vote,
    isLoading,
    isSuccess,
  } = useMutation(["vote"], query, {
    onSuccess: () => {
      queryClient.invalidateQueries(["vote"]);
    },
  });

  return {
    vote,
    isLoading,
    isSuccess,
  };
};

export default useVote;
