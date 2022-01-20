import React from 'react'
import Button from '../Button/Button'
import '../Searchbar/Searchbar.css'
import Input from '../Input/Input'
import Locate from '../Locate/Locate'

export default function Searchbar() {
    return (
        <div className="searchbardiv">
            <Input/>
            <Locate/>
            <Button btncls="orangebtn" btntext="FIND FOOD"/>
        </div>
    )
}
