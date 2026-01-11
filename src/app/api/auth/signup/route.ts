import { NextRequest, NextResponse } from 'next/server';
import { SignupRequest, SignupResponse } from '@/types/auth';

export async function POST(request: NextRequest) {
  try {
    const body: SignupRequest = await request.json();
    
    // Basic validation
    const { firstName, lastName, email, phone, password } = body;
    
    if (!firstName || !lastName || !email || !phone || !password) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required'
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format'
      }, { status: 400 });
    }

    // Password validation
    if (password.length < 6) {
      return NextResponse.json({
        success: false,
        message: 'Password must be at least 6 characters long'
      }, { status: 400 });
    }

    // Simulate user creation (replace with actual database logic)
    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      createdAt: new Date().toISOString()
    };

    // Generate a simple token (replace with JWT in production)
    const token = `token_${newUser.id}_${Date.now()}`;

    const response: SignupResponse = {
      success: true,
      message: 'Account created successfully',
      user: newUser,
      token
    };

    return NextResponse.json(response, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 });
  }
}