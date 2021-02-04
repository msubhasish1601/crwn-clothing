import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import {  fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';


class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // }
    // unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();

        //const { updateCollections } = this.props;
        //const collectionRef = firestore.collection('collections');

        //Via firebase Rest API way...
        // Promise pattern
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-16dc7/databases/(default)/documents/collections')
        //     .then(response => response.json)
        //     .then(collections => console.log(collections));


        //observable pattern
        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading:false});
        // });
    }

    render(){
        const {match} = this.props;
        //const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }

} 

// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionsMap =>dispatch(updateCollections(collectionsMap))
// });



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);