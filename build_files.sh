echo starting installation
sleep 3

echo starting in 5
pip install -r requirements.txt

python3.9 manage.py collectstatic

echo making databses collections

python3.9 makemigrations
python3.9 migrate