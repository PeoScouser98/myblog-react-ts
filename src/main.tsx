import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// * components
import ContactPage from "./pages/ContactPage";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="/posts" element={<PostPage />}>
						<Route path=":postId" element={<PostDetailPage />}></Route>
					</Route>
					<Route path="/blog" element={<ContactPage />}></Route>
					{/* Not found page */}
					<Route path="*" element={<NotFoundPage />}></Route>
					<Route path="/signup" element={<SigninPage />}></Route>
					<Route path="/signin" element={<SigninPage />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
