# Generated by Django 3.1.4 on 2020-12-18 15:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('owner', '0004_auto_20201218_1634'),
    ]

    operations = [
        migrations.AddField(
            model_name='animals',
            name='owner_animals',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='owner.owner'),
            preserve_default=False,
        ),
    ]
