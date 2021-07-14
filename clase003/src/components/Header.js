import React from 'react'
import {Col} from 'react-bootstrap'
const Header = () => {
	return ( 
		<Col md={12}>
			<header>
				<h1 className='text-center'>Header de Lean 🐱‍👤</h1>
			</header>
		</Col>
	 );
}
 
export default React.memo(Header);