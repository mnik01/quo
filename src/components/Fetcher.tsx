import { VFC } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native'
import { getTodos, postTodo } from '../api'


export const Fetcher: VFC = () => {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery('todos', getTodos)

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
    },
  })

  const _renderItem = (props) => (
    <TouchableOpacity onPress={console.log}>
      <Text>{props.item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList data={query.data} renderItem={_renderItem} />
      <Button
        title='Add Todo'
        onPress={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      />
    </View>
  )
}
