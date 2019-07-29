import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Link from 'next/link';
import { MDBBtn } from 'mdbreact';

const Index = () => (
    <div>
        <p>Hello Next.js</p>
        <Link href="/welcome">
            <MDBBtn>Welcome</MDBBtn>
        </Link>
    </div>
)

export default Index;