import React from 'react';
import './admin.css'; // Import the CSS file for styles

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
            </header>
            <aside className="admin-sidebar">
                <nav>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#users">Users</a></li>
                        <li><a href="#settings">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-content">
                <section id="overview">
                    <h2>Overview</h2>
                    {/* Overview content */}
                </section>
                <section id="users">
                    <h2>Users</h2>
                    {/* Users content */}
                </section>
                <section id="settings">
                    <h2>Settings</h2>
                    {/* Settings content */}
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
