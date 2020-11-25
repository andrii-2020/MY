from PIL import Image
import glob, os

size = 100, 100

for infile in glob.glob("1.jpg"):
    file, ext = os.path.splitext(infile)
    im = Image.open(infile)
    im.thumbnail(size)
    im.save(file + ".PNG", "JPEG")
    
