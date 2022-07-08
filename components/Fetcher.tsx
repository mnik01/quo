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
  Button
} from './Natives'
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


  return (
    <View>
      <FlatList data={query.data} renderItem={({item}) => <Text key={item.id}>{item.title}</Text>} />
      <Button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </Button>
    </Vi>
  )
}
