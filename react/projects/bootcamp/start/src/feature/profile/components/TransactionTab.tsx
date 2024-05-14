import { ScrollArea } from "@/components/ui/scroll-area"
import { TabsContent } from "@/components/ui/tabs"
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"

export const TransactionTab = () => {
  const data: any[] = []
  const isLoading = true
  return (
    <TabsContent value="transactions">
      <SheetHeader>
        <SheetTitle>Utlime Transazioni</SheetTitle>
        <SheetDescription>
          Visualizza le tue ultime transazioni
        </SheetDescription>
      </SheetHeader>
      <ScrollArea className="h-72 w-full max-w-sm rounded-md border overflow-y-auto mt-4">
        {isLoading ? (
          <>
            <SkeletonTransaction />
            <SkeletonTransaction />
            <SkeletonTransaction />
            <SkeletonTransaction />
            <SkeletonTransaction />
          </>
        ) : (
          data?.map((transaction) => (
            // <Transaction key={transaction.id} {...transaction} />
            <div>transazione</div>
          ))
        )}
      </ScrollArea>
    </TabsContent>
  )
}

// const Transaction = ({
//   amount,
//   created,
//   status,
//   payment_method_details,
// }: Charge) => (
//   <div
//     className={`flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-800 ${status === `succeeded` ? `bg-emerald-50` : `bg-red-50`}`}
//   >
//     <div>
//       <h4 className="font-semibold text-sm">
//         **{payment_method_details.card.last4}
//       </h4>
//       <p className="text-xs text-gray-500 dark:text-gray-400">
//         {new Date(created).toDateString()}
//       </p>
//     </div>
//     <div className="flex items-center gap-2">
//       <p className="font-semibold ">{(amount / 100).toFixed(2)}</p>
//       <div
//         className={`w-2 h-2 rounded-full ${
//           status === `succeeded` ? `bg-green-500` : `bg-red-500`
//         }`}
//       />
//     </div>
//   </div>
// )

const SkeletonTransaction = () => (
  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
    <div>
      <Skeleton className="w-20 h-4" />
      <Skeleton className="w-16 h-3" />
    </div>
    <div className="flex items-center gap-2">
      <Skeleton className="w-10 h-4" />
      <Skeleton className="w-4 h-4" />
    </div>
  </div>
)
