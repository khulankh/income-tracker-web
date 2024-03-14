import Category from "./Category";
import CheckboxLabel from "./CheckboxLabel";
import CreateRecordModal from "./CreateRecordModal";

export default function Sidebar() {
    return (
        <div className="sidebar-container" >
            <div style={{paddingLeft:'16px', display:'flex', flexDirection:'column', gap:"24px"}}>
                <div className="sidebar-top">
                    <h3 style={{ fontSize: '24px', margin: 0 }}>Records</h3>
                    <CreateRecordModal/>
                    {/* <button className="addrec-btn">+ Add</button> */}
                    <input placeholder="Search" type="text" className="search-input" />
                </div>
                <div className="sidebar-types">
                    <h6 style={{ fontSize: '16px', margin: 0 }}>Types</h6>
                    <CheckboxLabel />
                </div>
                <div className="sidebar-category">
                    <h6 style={{ fontSize: '16px', margin: 0 }}>Category</h6>
                    <Category />
                    <button className='add-category-btn'>+ Add Category</button>
                </div>
            </div>
        </div>
    )
}