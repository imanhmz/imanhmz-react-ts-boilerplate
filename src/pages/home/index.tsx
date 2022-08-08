import ReduxSaga from './../../assets/images/redux-saga.png'
import Redux from './../../assets/images/redux.png'
import I18 from './../../assets/images/i18en.png'
import Axios from './../../assets/images/axios.png'

const Index = () => {
    return (
        <>
            <div className={'main'}>
                <div>
                    <h1>Introduction</h1>
                    <p>
                        A simple react typescript multi language
                        boilerplate with the following features
                        out of the box configured.
                    </p>

                    <h1>Hands on</h1>
                    <p>
                        To get started, simply modify the
                        <code>
                            index.tx
                        </code>
                        file which is located underneath the
                        <code>
                            src/pages/home
                        </code>
                        folder.
                    </p>
                </div>
                <div className={'logos'}>
                    <a href="https://axios-http.com/">
                        <img src={Axios} alt=""/>
                    </a>
                    <a href="https://react-redux.js.org/">
                        <img src={Redux} alt=""/>
                    </a>
                    <a href="https://redux-saga.js.org/">
                        <img src={ReduxSaga} alt=""/>
                    </a>
                    <a href="https://react.i18next.com/">
                        <img src={I18} alt=""/>
                    </a>
                </div>
            </div>
            <div className={'footer'}>
                <p>
                    Made with  &#9829; by <a href={'https://github.com/imanhmz'}>imanhmz</a>
                </p>
            </div>
        </>
    )
}
export default Index