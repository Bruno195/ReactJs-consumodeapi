
import './styles.css';
import React from 'react';
import loadposts from '../../utils/loadPosts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

class Home extends React.Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  }



  async componentDidMount() {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadposts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMoreposts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state
    const nextPage = page + postsPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })

  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ searchValue: value })

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? allPosts.filter(
      (post) => post.title.toLowerCase().includes(searchValue.toLowerCase())
    ) : posts

    return (

      <section className='container'>


        {searchValue && <h1>Search Value: {searchValue}</h1>}
        <TextInput searchValue={searchValue}
          place={"Type something"}
          handleChange={this.handleChange} />


        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}></Posts>
        )}

        {filteredPosts.length == 0 &&
          <p>Não existem posts =(</p>
        }


        <div className="button-container">
          {!searchValue && (
            <Button text={"Load More posts"}
              onClick={this.loadMoreposts}
              disabled={noMorePosts}
            >

            </Button>

          )}


        </div>


      </section>


    )
  }

  //yet the component mount tje method componentdidmount was mounted
  //ever when you iterate on elements of react you need pass a key 
}
//decided where the state of application will stay
export default Home;
