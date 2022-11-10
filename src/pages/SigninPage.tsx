// import { signinAction } from "../actions/user";
import { RootState } from "@/app/store";
import { UserData } from "@/app/reducer/auth.reducer";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { signin } from "../app/actions/user";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import googleLogo from "../assets/google.svg";
import facebookLogo from "../assets/facebook.svg";
const SigninPage = () => {
	const dispatch: Dispatch<any> = useAppDispatch();
	const { user }: any = useAppSelector((state: RootState) => state);

	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		dispatch(signin(data));
	};
	return (
		<div className="fixed w-screen hero min-h-screen bg-base-200">
			{user !== null && <Navigate to="/" replace={true} />}
			<div className="hero-content flex-col lg:flex-row-reverse gap-10">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold text-primary">Đăng nhập ngay!</h1>
					<p className="py-6 text-2xl">
						Hi! Bạn có thể đăng nhập để comment và chia sẻ các kiến thức về Javascript mọi người
					</p>
				</div>

				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<Link
							className="font-mono font-bold inline-flex justify-center items-center gap-2 text-4xl text-center mb-10"
							to="/"
						>
							{"<CodeWithMe/>"}
						</Link>
						<div className="flex flex-col gap-2 w-full text-white">
							<a className="btn bg-[#1976D2] hover:bg-[#0F6CC8] hover:border-[#1976D2] border-[#1976D2] btn-block gap-1">
								<img src={facebookLogo} alt="" />
								Đăng nhập với tài khoản Facebook
							</a>
							<a className="btn btn-block gap-2">
								<img src={googleLogo} alt="" /> Đăng nhập với tài khoản Google
							</a>
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
