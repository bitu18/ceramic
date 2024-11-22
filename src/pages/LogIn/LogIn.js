import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import img from '~/assets/imgs';
import { useUserInfor } from '~/components/store';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function LogIn() {
    const { setUser } = useUserInfor();
    const navigate = useNavigate();

    const handleGoogleLogIn = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Fetch user info from Google's API
                const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });

                const userInfo = await response.json();

                // Update global store and localStorage
                setUser({
                    name: userInfo.name,
                    avatar: userInfo.picture,
                });

                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        name: userInfo.name,
                        avatar: userInfo.picture,
                    }),
                );

                // Navigate to home
                navigate('/');
            } catch (error) {
                console.error('Error fetching Google user info:', error);
            }
        },
        onError: () => {
            console.error('Google login failed');
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <img src={img.logo} alt="logo" className={cx('logo')} />
                <p className={cx('des')}>Hãy đăng nhập để bắt đầu đặt hàng!</p>
                <h1 className={cx('title')}>Đăng nhập</h1>

                {/* <Button rounded large className={cx('btn')}>
                    Đăng nhập bằng Facebook
                </Button> */}

                <Button rounded large className={cx('btn')} onClick={handleGoogleLogIn}>
                    Đăng nhập bằng Google
                </Button>
            </div>
        </div>
    );
}

export default LogIn;
