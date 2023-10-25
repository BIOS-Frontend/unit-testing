import {
	Avatar,
	Button,
	CircularProgress,
	Divider,
	InputAdornment,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Tab,
	Tabs,
	TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
	const [selectTab, setSelectTab] = useState('repositories');
	const [inputValue, setInputValue] = useState('');
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const onTabsChange = (event, newValue) => {
		setSelectTab(newValue);
	};

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const getData = async () => {
		setIsLoading(true);
		let url = `https://api.github.com/search/${selectTab}?q=${
			inputValue || 'react'
		}`;

		const response = await fetch(url);

		const data = await response.json();

		console.log(data);
		setData(data.items);
		setIsLoading(false);
	};

	const onSearchButtonClick = async () => {
		getData();
	};

	useEffect(() => {
		getData();
	}, [selectTab]);

	return (
		<section className="w-full p-10 flex flex-col items-center gap-4">
			<TextField
				variant="outlined"
				placeholder="Buscar"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							<Button onClick={onSearchButtonClick}>
								Buscar
							</Button>
						</InputAdornment>
					),
				}}
				value={inputValue}
				onChange={onInputChange}
			/>
			<Tabs value={selectTab} onChange={onTabsChange}>
				<Tab value="users" label="Usuarios" />
				<Tab value="repositories" label="Repositorios" />
			</Tabs>
			{isLoading ? (
				<CircularProgress />
			) : (
				<>
					{selectTab === 'users' ? (
						<List>
							{data?.map((item) => (
								<>
									<ListItem key={item.id}>
										<ListItemAvatar>
											<Avatar src={item?.avatar_url} />
										</ListItemAvatar>
										<ListItemText
											primary={item.login}
											secondary={item.url}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
								</>
							))}
						</List>
					) : (
						<List>
							{data?.map((item) => (
								<>
									<ListItem key={item.id}>
										<ListItemAvatar>
											<Avatar
												src={item?.owner?.avatar_url}
											/>
										</ListItemAvatar>
										<ListItemText
											primary={item.full_name}
											secondary={item.description}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
								</>
							))}
						</List>
					)}
				</>
			)}
		</section>
	);
}

export default App;
