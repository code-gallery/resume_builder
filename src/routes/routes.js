import React from "react";

const Categories = React.lazy(() => import("../Pages/Categories"));
const Products = React.lazy(() => import("../Pages/Products"));
const ProductDetailsPage = React.lazy(() => import("../Pages/ProductDetails"));
const CartPage = React.lazy(() => import("../Pages/Cart"));
const CheckoutPage = React.lazy(() => import("../Pages/Checkout"));
const OrderSuccess = React.lazy(() => import("../Components/Products/OrderSuccess/OrderSuccess"));
const OrderHistoryPage = React.lazy(() => import("../Pages/OrderHistory"));
// const RequestModal = React.lazy(() => import("../Components/Orders/RequestModal/RequestModal"));
const OrderReturnDetailsPage = React.lazy(() =>
import("../Pages/OrderReturnDetailsPage")
);
const ImportantInformation = React.lazy(() => import("../Components/Orders/ImportantInformation/ImportantInformation"));
const UsersPage = React.lazy(() => import("../Pages/Users"));
const AddUpdateUser = React.lazy(() => import("../Components/Users/AddUpdateUser/AddUpdateUser"));
const InventoryPage = React.lazy(() => import("../Pages/Inventory"));
// const ProductHistoryModal = React.lazy(() =>
// 	import("../Components/Inventory/ProductHistory/ProductHistoryModal")
// );
const ContactPage = React.lazy(() => import("../Pages/Contact"));
const ProfilePage = React.lazy(() => import("../Pages/Profile"));

export const routes = [
	{ path: "/", name: "Home", exact: true },
	{
		path: "/product-categories",
		exact: true,
		name: "Categories",
		component: Categories,
	},
	{
		path: "/product-categories/:categoryId/products",
		exact: true,
		name: "Products",
		component: Products,
	},
	{
		path: "/product-categories/:categoryId/products/:productId",
		exact: true,
		name: "Product Details",
		component: ProductDetailsPage,
	},
	{
		path: "/cart",
		exact: true,
		name: "Cart",
		component: CartPage,
	},
	{
		path: "/checkout",
		exact: true,
		name: "CheckoutPage",
		component: CheckoutPage,
	},
	{
		path: "/order-success",
		exact: true,
		name: "OrderSuccess",
		component: OrderSuccess,
	},
	// {
	// 	path: "/order-history/request",
	// 	// exact: true,
	// 	name: "Request",
	// 	component: RequestModal,
	// },
	{
		path: "/order-history",
		name: "Order History",
		component: OrderHistoryPage,
	},
	{
		path: "/orders/:subRoute/:orderId/info",
		exact: true,
		name: "Important Information",
		component: ImportantInformation,
	},
	{
		path: "/orders/:subRoute/:orderId",
		// exact: true,
		name: "Order Return Details",
		component: OrderReturnDetailsPage,
	},
	{ path: "/users", exact: true, name: "Users", component: UsersPage },
	{
		path: "/users/add",
		exact: true,
		name: "Add/Update User",
		component: AddUpdateUser,
	},
	{
		path: "/users/:userId/edit",
		exact: true,
		name: "Add/Update User",
		component: AddUpdateUser,
	},
	{
		path: "/inventory",
		name: "Inventory",
		component: InventoryPage,
	},
	// {
	// 	path: "/inventory/:productId/history",
	// 	exact: true,
	// 	name: "Product History",
	// 	component: ProductHistory,
	// },
	{ path: "/contact", exact: true, name: "Contact", component: ContactPage },
	{ path: "/profile", exact: true, name: "Profile", component: ProfilePage },
];