export default function handleEnter(event) {
    event.preventDefault() 
    if (event.which == 13) {
      const inputFieldArr = [...document.querySelectorAll('.assetTag')]
        .map(object => object.classList[1]);
      const inputClassName = event.target.classList[1]
      const inputClassIndex = inputFieldArr.indexOf(inputClassName)
      const nextIndex = inputClassIndex + 1;       
      
      if (nextIndex < inputFieldArr.length) {
        document.querySelectorAll('.assetTag')[nextIndex].focus()
      }
      else {
        console.log('update the database')
      }
    }
  }