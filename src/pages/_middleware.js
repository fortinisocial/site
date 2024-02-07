import { NextResponse, NextRequest } from 'next/server';
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == '/vagas') {
    return NextResponse.redirect(
      'https://forms.monday.com/forms/f3dd69e6eff50a180905fb8bac5a1b51?r=use1',
    );
  }
  return NextResponse.next();
}
