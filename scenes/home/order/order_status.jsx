import { memo, useMemo } from "react";

const OrderStatus = (props) => {
  const { isSuccess } = props;
  const MESSAGE = useMemo(() => {
    if (isSuccess) {
      return <><h1>SUCCESS</h1><p>Bạn đã đặt hàng thành công !!</p></>
    }
    return <><h1>FAIL</h1><p>Đặt hàng thất bại !!</p></>
  }, [isSuccess])
  return (
    <div className={`inline-block border ${isSuccess ? 'border-green-500' : 'border-red-500'} rounded-md overflow-hidden fixed top-[20px] right-[50px] ${isSuccess ? 'text-green-500' : 'text-red-500'} bg-white z-30`}>
      <div className='pt-2 pb-4 pl-10 pr-20'>
        {MESSAGE}
      </div>
      <div className={`absolute h-1 ${isSuccess ? 'bg-green-500' : 'bg-red-500'} bottom-0 right-0 z-50 animate-process`}></div>
    </div>
  )
}

export default memo(OrderStatus)