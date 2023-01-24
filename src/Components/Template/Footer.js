import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <footer id="footer" className="footer">
                    <div className="copyright">
                        &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">

                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </footer>
            </div>
        )
    }
}
