const ProductsIcon = require("../../assets/images/products.svg");
const ProductsActiveIcon = require("../../assets/images/square-org.svg");
const OrderHistoryIcon = require("../../assets/images/lis-menu-not-checked.svg");
const OrderHistoryActiveIcon = require("../../assets/images/clock-menu.svg");
const UsersIcon = require("../../assets/images/people-img.svg");
const UsersActiveIcon = require("../../assets/images/people-chekced.svg");
const InventoryIcon = require("../../assets/images/inventory.svg");
const InventoryActiveIcon = require("../../assets/images/list-menu-og.svg");
// const ActivityLog = require("../../assets/images/log.svg");
// const ActivityLog = require("../../assets/images/log.svg");
const ContactIcon = require("../../assets/images/mail-info.svg");
const ContactActiveIcon = require("../../assets/images/mail-org.svg");

export const companyNavs = [
	{
		name: "Products",
		url: "/product-categories",
		matchKey: "product",
		icon: ProductsIcon,
		activeIcon: ProductsActiveIcon,
	},
	{
		name: "Order History",
		url: "/order-history",
		matchKey: "order",
		icon: OrderHistoryIcon,
		activeIcon: OrderHistoryActiveIcon,
	},
	{
		name: "Users",
		url: "/users",
		matchKey: "user",
		icon: UsersIcon,
		activeIcon: UsersActiveIcon,
	},
	{
		name: "Inventory",
		url: "/inventory",
		matchKey: "inventory",
		icon: InventoryIcon,
		activeIcon: InventoryActiveIcon,
	},
	// {
	// 	name: "Activity Log",
	// 	url: "/activity-logs",
	//  matchKey: "activity",
	// 	icon: ActivityLog,
	// 	activeIcon: ActivityActiveIcon,
	// },
	{
		name: "Contact",
		url: "/contact",
		matchKey: "contact",
		icon: ContactIcon,
		activeIcon: ContactActiveIcon,
	},
];