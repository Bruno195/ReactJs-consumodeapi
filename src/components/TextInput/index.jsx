import React from 'react'

const textInput = (props) => {
    return (
        <div>

            <input style={{ width: "100%", fontSize: "20px", marginBottom: "30px" }} type="search"
                value={props.searchValue}
                placeholder={props.place}
                onChange={props.handleChange}


            //inside input you have target and inside target you have value

            />

        </div>
    )
}

export default textInput
