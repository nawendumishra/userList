
import { useRef ,useState} from 'react';
import Input from '../../Ui/Input';
import  classes from './MealItemForm.module.css';
const MealItemForm= props=>{ 
  const[amountisvalid,setamountisvalid]= useState(true);
  const amountInputRef=useRef();
  const submithandler=event => {
   event.preventDefault();
   const enteredAmount=amountInputRef.current.value;
   const enteredAmountNumber= +enteredAmount;
   if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
     setamountisvalid(false);
     return;
   }
     props.onAddToCart(enteredAmountNumber);
  }
  return ( 
  <form className={classes.form} onSubmit={submithandler} >
  <Input  
   ref={amountInputRef}
  label="Amount" 
  Input={{
    id:'amount_' + props.id ,
    type:'number',
    min:'1',
    max:'5',
    step:'1',
   
 }} />
   <button> +Add</button>
    {!amountisvalid && <p>please enter valid (1-5)</p>}
  </form>

  );
}
  export default MealItemForm;