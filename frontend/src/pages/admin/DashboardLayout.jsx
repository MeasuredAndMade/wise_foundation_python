import React, {useState, useEffect} from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import api from '../../api.js';

const DashboardLayout = () => {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);
    const navigate = useNavigate();
    const { section } = useParams();
    const [user, setUser] = useState(null);

    // Auth Check
    useEffect(() => {
        api.get('me/', { withCredentials: true }).then(res => {
            if (!res.data.username) { 
                navigate('/admin/login');
            } else if (!res.data.is_superuser) {
                navigate('/');
            } else {
                setUser(res.data);
                setAllowed(true);
            }
        }).catch(() => navigate('/admin/login'))
          .finally(() => setLoading(false));
    },[navigate]);

    // NOW it's safe to conditionally return
    if (loading) return null;
    if (!allowed) return null;

    return (
        <div className='container'>
            <div className='columns ml-3 mt-3'>
                <div className='column is-2'>
                    <Sidebar section={section} user={user} />
                </div>
                <div className='column is-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;