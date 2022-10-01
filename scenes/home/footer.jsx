import React, { memo } from 'react'
import TextButton from 'components/TextButton'
import ButtonImage from 'components/image_button'
import PrimaryButton from 'components/primary_button'
const Footer = () => {
    return (
        <div className='bg-black w-full h-[250px] flex flex-col'>
            <div className='basis-2/3 mt-[10px] flex flex-row'>
                <div className='basis-1/2 pl-[30px] pt-[43px]'>
                    <PrimaryButton text={'Get in touch'}
                        fontSize={'text-[24px]'}
                        height={'py-[10px]'}
                        width={'px-[30px]'}
                        border={'rounded-[30px]'}
                        href={'https://vlxx.sex/'} />
                </div>
                <div className=' basis-1/2 flex justify-end pr-[30px] pt-[30px]'>
                    <ButtonImage
                        href='https://www.facebook.com/longthanhplastic'
                        src='/images/DAX_Original.png'
                        atl="Logo"
                        width='137'
                        height='55'
                    />
                </div>
            </div>
            <div className='basis-1/6'>
                <div className='flex justify-end pr-[30px]'>
                    <TextButton text={'Chính sách bảo mật'} />
                </div>
            </div>
            <div className=' basis-1/6 flex flex-row'>
                <div className='basis-1/3 pl-[30px]'>
                    <TextButton text={"285 CMT8, p10, Q.10, Tp.HCM, VietNam"} />
                </div>
                <div className='basis-1/3'>
                    <div className='basis-1/3 flex justify-center items-center gap-x-[30px]'>
                        <div >
                            <ButtonImage
                                href='https://www.facebook.com/longthanhplastic'
                                src='/images/facebook.png'
                                atl="Image FaceBook"
                                width='30'
                                height='30'
                            />
                        </div>
                        <div>
                            <ButtonImage
                                href='https://www.facebook.com/longthanhplastic'
                                src='/images/instagram.png'
                                atl="Image FaceBook"
                                width='30'
                                height='30'
                            />
                        </div>
                        <div className='flex'>
                            <TextButton text={"Follow us"} />
                        </div>
                    </div>
                </div>
                <div className='basis-1/3 pr-[30px] flex justify-end'>
                    <TextButton text={'© 2022 DAX GROUP LTD.'} />
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);