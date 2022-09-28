import { useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import ButtonImage from "../../components/image_button";
import InputField from "../../components/input_field";

const OrderDialog = ({ closeDiaLog }) => {
  const [InputName, setInputName] = useState('')
  const [InputPhone, setInputPhone] = useState('')
  const [InputEmail, setInputEmail] = useState('')
  const [errorMessge, setErrorMessage] = useState({})
  const typingTimeOut = useRef({
    name: null,
    phone: null,
    email: null,
  })

  const handleOnSubmit = (e) => {
    const newErrorMessage = { ...errorMessge }
    //Validate InputName
    const patternName = /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i
    if (!InputName) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên không được bỏ trống' }
    } else if (!patternName.test(InputName)) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên phải bắt đầu bằng chữ cái' }
    }

    //Validate InputPhoneNumber
    const patternPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
    if (!InputPhone) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không được bỏ trống' }
    } else if (!patternPhone.test(InputPhone)) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không hợp lệ' }
    }


    //Validate InputEmail
    const patternEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
    if (!InputEmail) {
      newErrorMessage = { ...newErrorMessage, email: 'Email không được bỏ trống' }
    } else if (patternEmail.test(InputEmail)) {
      newErrorMessage = { ...newErrorMessage, email: 'Email này không hợp lệ' }
    }

    //Set message ERROR
    setErrorMessage(newErrorMessage);

    //Error 
    if (Object.keys(newErrorMessage).length > 0) {
      e.preventDefault()
    }
  }

  //Begin Validate action OnChane Input Field
  const ValidateChange = (pattern, key, e, label) => {
    const patternName = pattern;
    const newErrorMessage = { ...errorMessge };
    if (!e.target.value) {
      newErrorMessage = { ...newErrorMessage, [key]: `${label} không được bỏ trống` };
    }
    else if (patternName.test(e.target.value) === false) {
      newErrorMessage = { ...newErrorMessage, [key]: `${label} không hợp lệ` };
    }
    else if (newErrorMessage.hasOwnProperty(key)) {
      delete newErrorMessage[key];
    }
    setErrorMessage(newErrorMessage);
  }
  const handleOnchangeName = (e) => {
    setInputName(e.target.value);
    const patternName = /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;

    //While typing don't Validate
    if (typingTimeOut.current.name) {
      clearTimeout(typingTimeOut.current.name);
    }
    typingTimeOut.current.name = setTimeout(() => {
      ValidateChange(patternName, 'name', e, 'Họ tên')
    }, 400);

  }
  const handleOnChagePhone = (e) => {
    setInputPhone(e.target.value);
    const patternPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
    //While typing don't Validate
    if (typingTimeOut.current.phone) {
      clearTimeout(typingTimeOut.current.phone);
    }
    typingTimeOut.current.phone = setTimeout(() => {
      ValidateChange(patternPhone, 'phone', e, 'Số điện thoại')
    }, 400);

  }
  const handleOnChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const patternEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
    //While typing don't Validate
    if (typingTimeOut.current.email) {
      clearTimeout(typingTimeOut.current.email);
    }
    typingTimeOut.current.email = setTimeout(() => {
      ValidateChange(patternEmail, 'email', e, 'Email')
    }, 400);

  }
  //End Validate action onChane Input Field

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white rounded-lg inline-block w-11/12 md:w-2/4 relative box-border p-5 animate-dialogFadeIN">
        <span className="absolute top-5 right-5 cursor-pointer text-2xl" onClick={() => closeDiaLog()}><HiOutlineX /></span>
        <h3 className="text-center mb-8 text-lg">Bạn có thể mua hàng tại</h3>

        {/*Social*/}
        <div className="flex justify-center gap-5 mb-8">
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/facebook.png'
            atl="Image FaceBook"
          />
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/instagram.png'
            atl="Image Instagram"
          />
        </div>

        {/*Line*/}
        <div className='relative mb-8'>
          <div className="h-px bg-gray-300"></div>
          <span className="inline-block p-4 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">hoặc</span>
        </div>

        <form action="post" onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <InputField
              id='name' label='Họ tên'
              value={InputName}
              onInputChange={handleOnchangeName}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-3">
            <InputField
              id='phone' label='Số điện thoại'
              value={InputPhone}
              onInputChange={handleOnChagePhone}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-3">
            <InputField
              id='email' label='Email'
              value={InputEmail}
              onInputChange={handleOnChangeEmail}
              errorMessge={errorMessge}
            />
          </div>
          <input type='submit' className="bg-sky-300 px-14 py-3 rounded-2xl text-md font-bold text-white cursor-pointer block mx-auto" value='Đặt hàng'
            onClick={handleOnSubmit} />
        </form>
      </div>
    </div>
  )
}

export default OrderDialog;