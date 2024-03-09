import { Checkbox } from "@mui/material";
import EyeIcon from "../icons/See";

export default function Sidebar() {
    return (
        <div>
            <h3>Records</h3>
            <button>+ Add</button>
            <input placeholder="Search" type="text"/>
            <div>
                <h6>Types</h6>
                <Checkbox/>
            </div>
            <div>
                <h6>Category</h6>
                <EyeIcon />
            </div>
        </div>
    )
}