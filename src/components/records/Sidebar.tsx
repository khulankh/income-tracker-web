import React from 'react';
import Category from "./Category";
import CheckboxLabel from "./CheckboxLabel";
import CreateRecordModal from "./CreateRecordModal";

interface SidebarProps {
    transactionType: string; 
    setTransactionType: (type: string) => void;
    category: string; 
    setCategory: (category: string) => void; 
}

const Sidebar: React.FC<SidebarProps> = ({transactionType, setTransactionType, setCategory}) => {
    return (
        <div className="sidebar-container" >
            <div style={{paddingLeft:'16px', display:'flex', flexDirection:'column', gap:"24px"}}>
                <div className="sidebar-top">
                    <h3 style={{ fontSize: '24px', margin: 0 }}>Records</h3>
                    <CreateRecordModal/>
                </div>
                <div className="sidebar-types">
                    <h6 style={{ fontSize: '16px', margin: 0 }}>Types</h6>
                    <CheckboxLabel setTransactionType={setTransactionType} transactionType={transactionType} />
                </div>
                <div className="sidebar-category">
                    <h6 style={{ fontSize: '16px', margin: 0 }}>Category</h6>
                    <Category setCategory={setCategory}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
