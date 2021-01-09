import React from 'react';
import AddProduct from './AddProduct';
import AdminList from './AdminList';

const AdminPanel = () => {
    return (
        <div>
            <AddProduct />
            <AdminList />
        </div>
    );
};

export default AdminPanel;