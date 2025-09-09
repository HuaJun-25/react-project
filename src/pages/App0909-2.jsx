import Masonry from 'react-masonry-css'


const App = () => {

    // RWD斷點
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}

            </Masonry>
        </>
    )
}

export default App