import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.Tech Software Engineering" where="KMMITS(affiliated to JNTUA)" from="July 2014" to="june 2019"/>
<Widecard title="Intermediate" where="Sri Sai Chaitanya Junior College" from="2012" to="2014"/>
<Widecard title="SSC" where="Seven Hills High Schools" from="2011" to="2012"/>

</div>
)
}
}
export default Education