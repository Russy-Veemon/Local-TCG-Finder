from flask import Flask, render_template, session, redirect, request, flash


app = Flask(__name__)
app.secret_key = 'ollyollyoxinfree983164'