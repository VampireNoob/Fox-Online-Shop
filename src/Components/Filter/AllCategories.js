import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="">
                {['Alles', 'PlayStation', 'X-Box', 'Nintendo'].map((category, id) => <Filter category={ category } key={ id } />)}
        </div>
    )
}

export default AllCategories;