import React, { useState } from "react";
import List from "./list";

export function Home() {
	const [currentItem, setCurrentItem] = useState();
	const [itemList, setItemList] = useState([]);

	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
	};

	const addItemToList = e => {
		if (e.key == "Enter" && e.target.value !== "") {
			setItemList([...itemList, { item: currentItem, key: Date.now() }]);
			setCurrentItem("");
			console.log("list item", itemList);
		}
	};
	return (
		<div className="principal">
			<h1>Things ToDo</h1>
			<h3>Please type your tasks</h3>
			<header className="home-header">
				<div className="wrapper">
					<div className="Input-wrapper">
						<input
							value={currentItem}
							onKeyPress={addItemToList}
							onChange={onChangeHandler}
							tye="text"
							placeholder="What needs to be done?"
						/>
					</div>
					{}
					<List itemList={itemList} setItemList={setItemList} />
				</div>
			</header>
		</div>
	);
}
