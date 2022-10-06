import Image from 'next/image';
const ImageTest = (props) => {
  return (
    <div className={`inline-block relative ${props.className}`}>
      <Image src={props.src} alt={props.alt} layout='fill' objectFit='contain' />
    </div>
  )
}

export default ImageTest