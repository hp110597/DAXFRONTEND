import { useCallback, useEffect, useState, memo } from "react";
import ButtonImage from "components/image_button";
import InputField from "components/input_field";
import { useDebounce } from "hooks/helper";
import { regexName, regexEmail, regexPhone } from "utils/regex";
import ImageBackground from "components/image";

const OrderDialog = ({ closeDiaLog, handleShowOrderStatus, idProduct }) => {
  const [inputName, setInputName] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [errorMessge, setErrorMessage] = useState({})
  const debouncedName = useDebounce(inputName, 400);
  const debouncedPhone = useDebounce(inputPhone, 400);
  const debouncedEmail = useDebounce(inputEmail, 400);
  //Validate InputNameChange
  useEffect(() => {
    const patternName = regexName;
    validateChange(patternName, 'name', debouncedName, 'Họ tên');
  }, [debouncedName])
  //Validate InputNameChange
  useEffect(() => {
    const patternPhone = regexPhone;
    validateChange(patternPhone, 'phone', debouncedPhone, 'Số điện thoại');
  }, [debouncedPhone])
  //Validate InputPhoneChange
  useEffect(() => {
    const patternEmail = regexEmail;
    validateChange(patternEmail, 'email', debouncedEmail, 'Email');
  }, [debouncedEmail])


  const handleOnSubmit = useCallback((e) => {

    const newErrorMessage = { ...errorMessge }
    //Validate inputName
    const patternName = regexName;
    if (!inputName) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên không được bỏ trống' }
    } else if (!patternName.test(inputName)) {
      newErrorMessage = { ...newErrorMessage, name: 'Họ tên phải bắt đầu bằng chữ cái' }
    }

    //Validate inputPhoneNumber
    const patternPhone = regexPhone;
    if (!inputPhone) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không được bỏ trống' }
    } else if (!patternPhone.test(inputPhone)) {
      newErrorMessage = { ...newErrorMessage, phone: 'Số điện thoại không hợp lệ' }
    }


    //Validate inputEmail
    const patternEmail = regexEmail;
    if (!inputEmail) {
      newErrorMessage = { ...newErrorMessage, email: 'Email không được bỏ trống' }
    } else if (patternEmail.test(inputEmail)) {
      newErrorMessage = { ...newErrorMessage, email: 'Email này không hợp lệ' }
    }

    //Set message ERROR
    setErrorMessage(newErrorMessage);

    //Error 
    if (!Object.keys(newErrorMessage).length > 0) {

      const formData = { name: inputName, phone: inputPhone, email: inputEmail, id: idProduct };

      //Call API order Products
      fetch('http://localhost:5000/order', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status < 400) {
            handleShowOrderStatus(true);
          } else {
            handleShowOrderStatus(false);
          }
        })
        .catch((error) => {
          handleShowOrderStatus(false);
        });
      closeDiaLog();

    }
    e.preventDefault()
  }, [inputName, inputPhone, inputEmail, errorMessge])

  //Begin Validate action OnChane Input Field
  const validateChange = useCallback((pattern, key, inputName, label) => {
    const newErrorMessage = { ...errorMessge };
    if (!inputName) {
      newErrorMessage = { ...newErrorMessage, [key]: `` };
    }
    else if (pattern.test(inputName) === false) {
      newErrorMessage = { ...newErrorMessage, [key]: `${label} không hợp lệ` };
    }
    else if (newErrorMessage.hasOwnProperty(key)) {
      delete newErrorMessage[key];
    }
    setErrorMessage(newErrorMessage);
  }, [errorMessge])

  const handleOnchangeName = useCallback((e) => {
    setInputName(e.target.value);
  }, [])
  const handleOnChagePhone = useCallback((e) => {
    setInputPhone(e.target.value);
  }, [])
  const handleOnChangeEmail = useCallback((e) => {
    setInputEmail(e.target.value);
  }, [])
  //End Validate action onChange Input Field

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-bgPrimary text-white rounded-lg inline-block w-11/12 md:max-w-2xl xl:max-w-3xl relative -z-10 box-border p-7 animate-dialogFadeIN overflow-hidden">
        <span className="absolute top-5 right-5 cursor-pointer" onClick={closeDiaLog}>
          <ButtonImage
            src='/images/close.png'
            atl='Icons Close'
            width={30}
            height={30}
          />
        </span>
        <h3 className="text-center mb-10 text-lg tracking-widest">Bạn có thể mua hàng tại</h3>

        {/*Social*/}
        <div className="flex justify-center gap-6 mb-12">
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/images/facebook.png'
            atl="Image FaceBook"
            width={30}
            height={30}
          />
          <ButtonImage
            href='https://www.facebook.com/longthanhplastic'
            src='/images/instagram.png'
            atl="Image FaceBook"
            width={30}
            height={30}
          />
        </div>

        {/*Line*/}
        <div className='relative mb-6'>
          <div className="h-px bg-gray-300"></div>
          <span className="inline-block p-4 bg-bgPrimary absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">hoặc</span>
        </div>

        {/*Image Bubbles */}
        <ImageBackground
          src='/images/bubbles_1.png'
          alt="Bubble Image"
          className="w-[400px] h-[200px] absolute top-[5rem] left-1/2 -z-1 opacity-0"
          startX='-50%'
          endX="-50%"
          startY="-20%"
          endOpacity="0.5"
        />
        {/*Image Bubbles */}
        <ImageBackground
          src='/images/watermelon.png'
          alt="Bubble Image"
          className="w-[120px] h-[120px] absolute bottom-0 left-0 -z-1"
        />
        {/*Form*/}
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <InputField
              id='name' label='Họ tên'
              name='name'
              placeholder='Nhập họ tên ...'
              value={inputName}
              onInputChange={handleOnchangeName}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-6">
            <InputField
              id='phone' label='Số điện thoại'
              name='phone'
              placeholder='Nhập số điện thoại ...'
              value={inputPhone}
              onInputChange={handleOnChagePhone}
              errorMessge={errorMessge}
            />
          </div>
          <div className="mb-6">
            <InputField
              id='email' label='Email'
              name='email'
              placeholder='Nhập Email ...'
              value={inputEmail}
              onInputChange={handleOnChangeEmail}
              errorMessge={errorMessge}
            />
          </div>
          <input type='submit' className="bg-primary px-16 py-2.5 rounded-2xl text-base font-avertaBold text-white cursor-pointer block mx-auto" value='Đặt hàng' />
        </form>
      </div>
    </div>
  )
}

export default memo(OrderDialog);