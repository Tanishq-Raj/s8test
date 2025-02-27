import React, { useContext, useState } from 'react';
import { FormInput } from '../components/auctionSystem/SignInUser/FormInput';
import { SocialSignInButton } from '../components/auctionSystem/SignInUser/SocialSignInButton';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';


const userInputs = [
    { label: "Full Name", placeholder: "Enter your Full Name here", type: "text" },
    { label: "Email", placeholder: "Enter your Email here", type: "email" },
    { label: "Password", placeholder: "Enter your Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm your password", type: "password" },
    { label: "Phone Number", placeholder: "Enter your Phone Number", type: "tel" },
    { label: "Flat No, Building Name, Street Name", placeholder: "Enter your Flat No, Building Name, Street Name", type: "text"},
    { label: "City", placeholder: "Enter your City", type: "text" },
    { label: "State", placeholder: "Enter your State", type: "text" },
    { label: "Pincode", placeholder: "Enter your Pincode", type: "text" },
];

const bankOfficerSteps = [
    {
        title: "Personal Information",
        inputs: [
            { label: "Full Name", placeholder: "Enter your Full Name here", type: "text" },
            { label: "Email", placeholder: "Enter your Email here", type: "email" },
            { label: "Phone Number", placeholder: "Enter your Phone Number", type: "tel" },
            { label: "Address", placeholder: "Enter your Address", type: "text" },
            { label: "City", placeholder: "Enter your City", type: "text" },
    { label: "State", placeholder: "Enter your State", type: "text" },
    { label: "Pincode", placeholder: "Enter your Pincode", type: "text" },
        ],
    },
    {
        title: "Bank Details",
        inputs: [
            { label: "Bank Branch", placeholder: "Enter your Bank Branch" },
            { label: "Employee ID", placeholder: "Enter your Employee ID" },
            { label: "Position", placeholder: "Enter your Position" },
        ],
    },
    {
        title: "Verification",
        inputs: [
            { label: "Upload ID Proof", placeholder: "Upload your ID Proof", type: "file" },
            { label: "OTP Verification", placeholder: "Enter the OTP sent to your phone" },
        ],
    },
    {
        title: "Confirmation",
        inputs: [],
    },
];

const signInInputs = [
    { label: "Email", placeholder: "Enter your Email here", type: "email" },
    { label: "Password", placeholder: "Enter your Password", type: "password" },
];


export default function SignUpPage() {
    const [userType, setUserType] = useState("User");
    const [currentStep, setCurrentStep] = useState(0);
    const [isSignIn, setIsSignIn] = useState(false);
    const [formErrors, setFormErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
    });
    const {bankOfficerFormValues, setBankOfficerFormValues, userFormValues, setUserFormValues} = useContext(AppContext)

    const {serverUrl} = useContext(AppContext)
    const socialButtons = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bc5b28e34b89399a5181e0b1ad025dca906bce676746acf663a21997d16f714?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", text: "Sign in with Google", serverApi: serverUrl + "/api/v1/user/auth/google" },
    ];
    const navigate = useNavigate();
    
    const handleFormSubmit = () => {
        window.scrollTo(0, 0);
        navigate("/usersideprime");
    }

    // const handleBankOfficer = () => {
    //     window.location.href = 'http://localhost:3001';
    // }

    const handleUserTypeChange = (type) => {
        setUserType(type);
        setCurrentStep(0);
    };

    const handleNextStep = () => {
        if (currentStep < bankOfficerSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        }else {
            window.location.href = 'https://s8-chi.vercel.app/';
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!/^[a-zA-Z\s]+$/.test(formInputs[0].value)) {
            errors.fullName = "Name should contain only characters";
            isValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formInputs[1].value)) {
            errors.email = "Email should be a valid email address";
            isValid = false;
        }

        if (formInputs[2].value.length < 8) {
            errors.password = "Password should be at least 8 characters";
            isValid = false;
        }

        if (!/^\d+$/.test(formInputs[4].value)) {
            errors.phoneNumber = "Phone number should contain only integers";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const formInputs = isSignIn ? signInInputs : (userType === "User" ? userInputs : bankOfficerSteps[currentStep].inputs);

    return (
        <div className="min-h-screen bg-[#004663] flex items-stretch">
            {/* Left side with image and logo */}
            <div className="grow relative overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eba43b41f3c96cf576db0e088a6e68fedebd78e43d484259601eaedbe093a02?placeholderIfAbsent=true&apiKey=a758ebeaca3540fcaac54d04196cb9ec"
                        alt="Auction Gavel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute bottom-20 left-10 text-white z-10">
                    <div className="text-5xl font-bold mb-4">s8</div>
                    <div className="text-lg max-w-md leading-relaxed">
                        "Unlocking opportunities, one auction at a time - connecting dreams to destinations."
                    </div>
                    <div className="flex gap-2 mt-6">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right side with form */}
            <div className="w-[600px] flex-none">
                <div className="h-full">
                    <div className="h-full px-4 py-8 bg-white shadow-lg rounded-l-3xl sm:px-12">
                        <div className="h-full flex flex-col">
                            <div className="flex-1">
                                <div className="text-2xl font-bold text-center mb-8 text-[#004663]">
                                    {isSignIn ? "Sign In" : "Create Account"}
                                </div>
                                
                                {!isSignIn && (
                                    /* User Type Selection */
                                    <div className="flex justify-center gap-4 mb-8">
                                        <button
                                            onClick={() => handleUserTypeChange("User")}
                                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                                userType === "User"
                                                    ? "bg-[#004663] text-white shadow-lg"
                                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                        >
                                            User
                                        </button>
                                        <button
                                            onClick={() => handleUserTypeChange("Bank Officer")}
                                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                                userType === "Bank Officer"
                                                    ? "bg-[#004663] text-white shadow-lg"
                                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                        >
                                            Bank Officer
                                        </button>
                                    </div>
                                )}

                                {/* Progress Steps for Bank Officer */}
                                {!isSignIn && userType === "Bank Officer" && (
                                    <div className="flex justify-between mb-8">
                                        {bankOfficerSteps.map((step, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center"
                                            >
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                                        index <= currentStep
                                                            ? "bg-[#004663] text-white"
                                                            : "bg-gray-200 text-gray-600"
                                                    }`}
                                                >
                                                    {index + 1}
                                                </div>
                                                <div className="text-xs mt-1">{step.title}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Form Inputs */}
                                <div className="space-y-6">
                                    {formInputs.map((input, index) => (
                                        <FormInput
                                        key={index}
                                        {...input}
                                        isBankOfficer={userType === "Bank Officer"}
                                        error={formErrors[input.label.toLowerCase().replace(/\s+/g, '')]}
                                    />
                                    
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 space-y-4">
                                <button
                                    onClick={isSignIn ? handleFormSubmit : userType === "Bank Officer" ? handleNextStep : validateForm ? handleFormSubmit : null}
                                    className="w-full py-3 bg-[#004663] text-white rounded-lg font-semibold hover:bg-sky-900 transition-colors duration-200"
                                >
                                    {isSignIn 
                                        ? "Sign In"
                                        : userType === "Bank Officer"
                                            ? currentStep === bankOfficerSteps.length - 1
                                                ? "Complete Registration"
                                                : "Next Step"
                                            : "Sign Up"
                                    }
                                </button>

                                {/* Social Sign-in */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {socialButtons.map((button, index) => (
                                        <SocialSignInButton key={index} {...button} />
                                    ))}
                                </div>

                                <div className="text-center mt-6">
                                    <span className="text-gray-600">
                                        {isSignIn ? "Don't have an account? " : "Already have an account? "}
                                    </span>
                                    <button 
                                        onClick={() => setIsSignIn(!isSignIn)}
                                        className="text-[#004663] font-semibold hover:text-sky-900"
                                    >
                                        {isSignIn ? "Sign Up" : "Sign In"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
