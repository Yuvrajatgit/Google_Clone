
import './Search.css';
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import InputSearch from '../components/InputSearch';
import SearchIcon from '@mui/icons-material/Search';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Search() {
  const [{term}, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className='search'>
       <div className='search__header'>
         <Link to="/">
         <img className='search__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='logo'/>
         </Link>
         <div className='search__headerBody'>
          <InputSearch hideButtons/>
           <div className='search__options'>
             <div className='search__optionsLeft'>
               <div className='search__option'>
                 <SearchIcon/>
                 <Link to="/all">All</Link>
               </div>
               <div className='search__option'>
                 <VideoSettingsIcon/>
                 <Link to="/videos">Videos</Link>
               </div>
               <div className='search__option'>
                 <LibraryBooksIcon/>
                 <Link to="/books">Books</Link>
               </div>
               <div className='search__option'>
                 <NewspaperIcon/>
                 <Link to="/news">News</Link>
               </div>
               <div className='search__option'>
                 <ImageSearchIcon/>
                 <Link to="/images">Images</Link>
               </div>
               <div className='search__option'>
                 <MoreVertIcon/>
                 <Link to="/more">More</Link>
               </div>
             </div>
             <div className='search__optionsRight'>
                <div className='search__option'>
                  <Link to="/tools">Tools</Link>
                </div>
             </div>
           </div>
         </div>
       </div>
             {term && (<div className='search__results'>
              <p className='search__results__time'>About {data?.searchInformation.formattedTotalResults}
               results ({data?.searchInformation.formattedSearchTime}) seconds for {term}</p>
               {data?.items.map(item => (<div className='search__result'> <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className='search__resultImage' alt='logo' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}></img>
                )}
                {item.displayLink}</a>
              <a className='search__result__title' href={item.link}><h2>{item.title}</h2></a>
              <p className='search__result__snippet'>{item.snippet}</p>
                </div>))}
             </div>)}       
    </div>
  )
}

export default Search;