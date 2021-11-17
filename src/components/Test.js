import React from "react"

export default function Test() {
    const name = "Brandon"
    const usersArray = ["Brandon", "Joe", "John"]

    function Users() {
        return name
    }

    const userArrowFunction = () => {
        return name
    }

    


    return (
        <ul>
            {
                usersArray.map((users) =>
                    <li>{users}</li>
                )
            }
        </ul>
    )
}