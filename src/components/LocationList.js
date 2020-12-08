const LocationList = () => {
	<Card>
		<Card.Header>Locations</Card.Header>
		<Card.Body>
			<FlatList
				className="list-group list-group-flush"
				data={locations}
				renderItem={({ item }) => {
					return (
						<div className="list-group-item">
							{item.camera_id}. {item.area}
						</div>
					);
				}}
				keyExtractor={(item) => item.camera_id}
			/>
		</Card.Body>
	</Card>;
};
