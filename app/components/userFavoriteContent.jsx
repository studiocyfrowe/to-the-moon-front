import React from "react";
import DropdownContent from "./dropdownContent";
import MoviesBox from "./moviesBox";
import ButtonsBox from "./buttonsBox";

export default function UserFavoriteContent() {
    return (
        <React.Fragment>
            <div className="flex flex-col divide-y divide-orange-600/30">
                <DropdownContent name={`Kina`} count={19}>
                    <div>kina</div>
                </DropdownContent>
                <DropdownContent name={`Filmy`} count={10}>
                    <MoviesBox/>
                </DropdownContent>
                <DropdownContent name={`Gatunki filmowe`} count={10}>
                    <ButtonsBox></ButtonsBox>
                </DropdownContent>
            </div>
        </React.Fragment>
    )
}