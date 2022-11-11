import { RootState } from "../app/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useAppDispatch } from "../app/hooks";
import { asyncSigninThunk } from "../app/slice/user.slice";
// * firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useDispatch, useSelector } from "react-redux";
import StyledFirebaseAuth from "../components/StyledFirebaseAuth";
import { config, uiConfig } from "../service/firebase.config";
// * components
import Logo from "../assets/logo.svg";

firebase.initializeApp(config);

type SigninPayload = {
	email: string;
	password: string;
};
const SigninPage = () => {
	const dispatch = useAppDispatch();
	const { user } = useSelector((state: RootState) => state);
	const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

	// * Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
			setIsSignedIn(!!user);
			if (user) {
				const auth = await user.getIdToken(); // -> return access token from firebase
			}
		});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	}, []);

	// * signin submit
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data: any) => {
		dispatch(asyncSigninThunk(data));
		console.log("current user:>>", user);
	};

	// * If existing user data  in redux store -> meaning that has user logged in -> navigate to dashboard
	if (user !== null) return <Navigate to="/" replace={true} />;

	return (
		<div className="fixed w-screen h-screen hero bg-base-200">
			<div className="hero-content sm:flex-col flex-row-reverse gap-10">
				<div className="text-center lg:text-left">
					<img src={Logo} alt="" className="max-w-[50%] mx-auto" />
					<h1 className="text-5xl font-bold text-primary">Đăng nhập ngay!</h1>
					<p className="py-6 text-2xl">
						Hi! Bạn có thể đăng nhập để comment và chia sẻ các kiến thức về Javascript cùng với mọi người
					</p>
				</div>

				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<div className="flex flex-col gap-2 w-full text-white">
							<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="btn btn-block gap-2" />
						</div>
						<div className="divider">Hoặc</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control gap-1 mb-6">
								<label htmlFor="">Email</label>
								<input
									type="email"
									className="input input-bordered bg-transparent"
									placeholder="example@email.com"
									{...register("email", { required: true })}
								/>
							</div>
							<div className="form-control gap-1 mb-6">
								<label htmlFor="">Password</label>
								<input
									type="password"
									className="input input-bordered bg-transparent"
									placeholder="*******"
									{...register("password", { required: true })}
								/>
								<span className="text-base-content/70 my-2">
									Chưa có tài khoản?
									<Link to="/signup" className="text-base-content pl-2 hover:link">
										Đăng ký
									</Link>
								</span>
							</div>

							<button type="submit" className="btn btn-primary btn-block my-6 text-lg">
								Đăng nhập
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninPage;
