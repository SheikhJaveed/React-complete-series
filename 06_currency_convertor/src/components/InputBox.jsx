import React, {useId} from 'react'

/*this is like function({JS object}){
        //code
    }
*/
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currrencyDisabled = false,
    className = "",
}) {

    const id = useId() //useId is a custom hook to generate unique id
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id}  className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            id={id}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => {
                let value = e.target.value;
                if (value === "") {
                    onAmountChange(""); // Allow empty input
                } else {
                    onAmountChange(value.replace(/^0+/, "")); // Remove leading zeros
                }
            }}
             />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currrencyDisabled}
        >
            {/*The parentheses () around the JSX allow implicit return.
            The function automatically returns the <option> element without needing an explicit return statement.
            The curly braces {} indicate an explicit function body.
            You must use return inside the function.
            */}
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox;