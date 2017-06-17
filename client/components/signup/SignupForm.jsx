import react, {Component} from 'react';

 class SignupForm extends Component{
     render(){
         return (
             <div className="row">
                 <div className="signup">
                     <h1>Sign Up
                         <p className="text-muted">Its's free and always will be.</p>
                     </h1>
                 </div>
                 <form action="">
                     <div className="col-sm-9">
                         <div className="row">
                             <div className="col-sm-6 form-group">
                                 <input name="first_name" placeholder="First Name" ref="first_name" type="text" />
                             </div>
                             <div className="col-sm-6 form-group">
                                 <input name="last_name" placeholder="Last Name" ref="last_name" type="text" />
                             </div>
                         </div>
                         <div className="form-group"></div>
                         <div className="form-group"></div>
                     </div>
                 </form>
             </div>
         )
     }
 }