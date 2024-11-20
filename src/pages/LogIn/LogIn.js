import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import ReactFacebookLogin from 'react-facebook-login';
import classNames from 'classnames/bind';
import styles from './LogIn.module.scss';
import img from '~/assets/imgs';
import Button from '~/components/Button';
import { useUserInfor } from '~/components/store';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function LogIn() {
    const { setUser } = useUserInfor();
    const navigate = useNavigate();

    const handleSuccess = (response) => {
        const decoded = jwtDecode(response.credential); // decode credentials to get user's information
        console.log(decoded);
        setUser({
            name: decoded.name,
            avatar: decoded.avatar,
        });

        localStorage.setItem(
            'user',
            JSON.stringify({
                name: decoded.name,
                avatar: decoded.picture,
            }),
        );
        navigate('/');
    };

    const handleError = () => {
        console.log('Google login failed');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <img src={img.logo} alt="logo" className={cx('logo')} />
                <p className={cx('des')}>Hãy đăng nhập để bắt đầu đặt hàng!</p>
                <h1 className={cx('title')}>Đăng nhập</h1>

                <div className={cx('btn')}>
                    <GoogleOAuthProvider clientId="542258222683-k64hdtdjnuefslalovlkq4tvj6e4nodp.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleError}
                            cookiePolicy="single_host_origin"
                        />
                    </GoogleOAuthProvider>
                </div>
                {/* 
                <div className={cx('btn')}>
                    <ReactFacebookLogin
                        appId="your-facebook-app-id" // Replace with your Facebook App ID
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={handleFacebookLogin}
                        onFailure={handleFacebookError}
                        textButton="Đăng nhập bằng Facebook"
                        icon="fa-facebook"
                    />
                </div> */}

                {/* <Button rounded large className={cx('btn')}>
                    Đăng nhập bằng Facebook
                </Button> */}

                {/* render={(renderProps) => (
                            <Button onClick={renderProps.onClick} rounded large className={cx('btn')}>
                                Đăng nhập bằng Google
                            </Button>
                        )} */}
            </div>
        </div>
    );
}

export default LogIn;
