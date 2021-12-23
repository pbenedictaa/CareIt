import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const Login = {
    async render() {
        return `
        <div class="body">
    <div class="login" id="login">
        <div class="form-container sign-up-container">
            <form id="signupForm">
                <h1>Buat Akun</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span class="spann">atau gunakan email anda untuk registrasi</span>
                <input type="text" id="sname" placeholder="Nama" />
                <input type="email" id="semail" placeholder="Email" />
                <input type="password" id="spassword" placeholder="Password" />
                <button type="submit" class="log-but" id="register">Daftar</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form id="loginForm">
                <h1>Masuk</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span class="spann">atau masuk dengan akun anda</span>
                <input type="email" id="lemail" placeholder="Email" />
                <input type="password" id="lpassword" placeholder="Password" />
                <a href="#" class="social">Lupa Password?</a>
                <button type="submit" class="log-but">Masuk</button>
                <a id="masuk" class="masuk" href="akun.html#/akun"></a>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Selamat Datang Kembali!</h1>
                    <p>Untuk tetap terkoneksi dengan kami, silahkan masuk ke akun anda</p>
                    <button class="ghost" id="signIn">Masuk</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Halo Kakak Baik!</h1>
                    <p>Buat akun anda dan mulai perjalanan menjadi volunteer bersama kami</p>
                    <button class="ghost" id="signUp">Daftar</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
    },

    async afterRender() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('login');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
        
        const firebaseConfig = {
            apiKey: "AIzaSyCVnl43gvTcHeYgb14GEaoMAMHeoIqOI-c",
            authDomain: "capstone-1201c.firebaseapp.com",
            projectId: "capstone-1201c",
            storageBucket: "capstone-1201c.appspot.com",
            messagingSenderId: "181905352695",
            appId: "1:181905352695:web:97e2754084e1f3fe2170f2"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        // const db = getFirestore(app);
        // db.settings({timestampsInSnapshots: true})

        const SignupForm = document.querySelector('#signupForm');
        SignupForm.addEventListener("submit", (e) =>{
            e.preventDefault();
            const email = SignupForm['semail'].value;
            const password = SignupForm['spassword'].value;

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                SignupForm.reset();
                alert("Akun anda berhasil dibuat, silahkan login");
                // document.querySelector('.masuk').click();
            });
        });

        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = loginForm['lemail'].value;
            const password = loginForm['lpassword'].value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    loginForm.reset();
                    document.querySelector('.masuk').click();
                    
                })
        })
        const logout = document.getElementById("btnLogout");
        logout.addEventListener("click", (e) => {
            e.preventDefault();
            auth.signOut();
        });
        auth.onAuthStateChanged(user =>{
            if(user){
                console.log("ada");
            } else {
                console.log("Gada");
            }
        });

    },
};

export default Login;